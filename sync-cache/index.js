const core = require("@actions/core");

const main = async () => {
  try {
    const restore = core.getInput("restore") || false;

    if (restore) {
      const cache = require("@actions/cache");

      const cacheFile = core.getInput("cache-file");
      const cacheKey = core.getInput("cache-key");
      const ref = core.getInput("ref");
      const sha = core.getInput("sha");

      await cache.restoreCache([cacheFile], cacheKey);

      const fs = require("fs");

      const filePath = core.toPlatformPath(`./${cacheFile}`);

      let output = true;

      if (fs.existsSync(filePath)) {
        const [cachedRef, cachedSha] = fs
          .readFileSync(filePath, {
            encoding: "utf8",
            flag: "r",
          })
          .toString()
          .split("\n");

        core.info(`Arg sha: ${sha}`);
        core.info(`Cache sha: ${cachedSha}`);

        core.info(`Arg ref: ${ref}`);
        core.info(`Cache ref: ${cachedRef}`);

        output = cachedSha !== sha && cachedRef === ref;
      } else {
        core.notice("No cache found. Will create new");
      }

      core.info(`output: ${output}`);
      core.setOutput("CAN_PROCEED", output);
    } else {
      core.info(`No cache restore needed`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
