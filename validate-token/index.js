const core = require('@actions/core');

try {
  const env = core.getInput('env');
  const input = core.getInput('input');
  const token = core.getInput('token');
  const ref = core.getInput('ref');
  const proceed =
    env !== `production` ||
    (input ? token && input === token : /refs\/tags\/v*.*.*/gm.test(ref));
  if (!proceed) {
    core.setFailed(`Invalid push token or ref`);
  }
} catch (error) {
  core.setFailed(error.message);
}
