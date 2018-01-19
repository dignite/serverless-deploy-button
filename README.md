# serverless-deploy-button
Try out Serverless and build a deploy button endpoint to be used with a Flic button

# Get started

## Dependencies

- `npm install serverless -g`
- `npm install`

## AWS Credentials

This stores the credentials in the shell session only.

Windows:

- `set AWS_ACCESS_KEY_ID=`**ID**
- `set AWS_SECRET_ACCESS_KEY=`**KEY**
- `set AWS_DEFAULT_REGION=`**REGION**

Linux:

- `export AWS_ACCESS_KEY_ID=`**ID**
- `export AWS_SECRET_ACCESS_KEY=`**KEY**
- `export AWS_DEFAULT_REGION=`**REGION**


## Gitlab Url

Create a file `gitlab-url.txt` with the url in clear text.

## Deploy

- `serverless deploy`
