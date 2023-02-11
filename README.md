## Push to ECR

CLI:
```
aws ecr get-login-password --region <your-ecr-region> | docker login -u AWS --password-stdin <your-ecr-domain>
```