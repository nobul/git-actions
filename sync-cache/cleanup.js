const core = require("@actions/core");

const cleanup = async () => {
  try {
    const restore = core.getInput("restore") || false;

    if (!restore) {
      const cache = require("@actions/cache");

      const cacheFile = core.getInput("cache-file");
      const cacheKey = core.getInput("cache-key");
      const ref = core.getInput("ref");
      const sha = core.getInput("sha");

      const fs = require("fs");

      const filePath = core.toPlatformPath(`./${cacheFile}`);

      fs.writeFile(filePath, `${ref}\n${sha}`, async (err) => {
        if (err) throw err;

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
