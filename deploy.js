// eslint-disable-next-line import/prefer-default-export
export const trigger = (event, context, cb) => {
  const body = JSON.parse(event.body);
  const token = body.token;
  const username = body.username;
  const projectId = body.projectId;
  const jobName = body.jobName;
  const p = new Promise((resolve) => {
    resolve('success');
  });
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `${body.token} - ${body.username} - ${body.projectId} - ${body.jobName}`,
      input: event,
    }),
  };
  p
    .then(() => cb(null, response))
    .catch(e => cb(e));
};
