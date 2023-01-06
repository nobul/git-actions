const core = require("@actions/core");

const { promisify } = require("util");
const childProcess = require("child_process");
const exec = promisify(childProcess.exec);

const cleanup = async () => {
  try {
    const canProceed = core.getState("canProceed");
    const restore = core.getInput("restore") || false;

    if (!restore || canProceed) {
      const cache = require("@actions/cache");

      const cacheFile = core.getInput("cache-file");
      const cacheKey = core.getInput("cache-key");
      const ref = core.getInput("ref");
      const sha = core.getInput("sha");

      const fs = require("fs");

      const filePath = core.toPlatformPath(`./${cacheFile}`);

      fs.writeFile(filePath, `${ref}\n${sha}`, async (err) => {
        if (err) throw err;

        const repo = core.getInput("repo");
        const token = core.getInput("token");

        try {
          await exec(`curl \
                      -X DELETE \
                      -H "Accept: application/vnd.github.v3+json" \
                      -H "Authorization: token ${token}" \
                      https://api.github.com/repos/${repo}/actions/caches/${cacheKey}`);
        } catch (error) {
          console.error(error);
        }

        await cache.saveCache([filePath], cacheKey);

        core.info(`Updated cache from ${cacheKey}`);
      });
    } else {
      core.info(`No cache update needed`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
};

cleanup();
