# serverless-deploy-button
Try out Serverless and build a deploy button endpoint to be used with a Flic button

# Set up dependencies

## 1. Install Dependencies

- `npm install serverless -g`
- `npm install`

## 2. Gitlab Url

Create a file `gitlab-url.txt` with the url in clear text.

# Run locally

`serverless offline start`

# Deploy to AWS

## 1. Set AWS Credentials

This stores the credentials in the shell session only.

Windows:

- `set AWS_ACCESS_KEY_ID=`**ID**
- `set AWS_SECRET_ACCESS_KEY=`**KEY**
- `set AWS_DEFAULT_REGION=`**REGION**

Linux:

- `export AWS_ACCESS_KEY_ID=`**ID**
- `export AWS_SECRET_ACCESS_KEY=`**KEY**
- `export AWS_DEFAULT_REGION=`**REGION**

## 2. Deploy

- `serverless deploy`
