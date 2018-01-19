import gitlabUrl from './gitlab-url.txt'
import { triggerDeploy } from './src/deploy-to-gitlab'

// eslint-disable-next-line import/prefer-default-export
export const trigger = (event, context, cb) => {
  const body = JSON.parse(event.body);
  const token = body.token;
  const email = body.email;
  const projectId = body.projectId;
  const jobName = body.jobName;
  triggerDeploy({
    token,
    email,
    projectId,
    jobName
  })
    .then(() => {
      cb(null, response)
    })
    .catch(e => {
      const response = {
        statusCode: 500,
        body: {
          error: e.toString()
        }
      }
      cb(null, response)
    });
};
