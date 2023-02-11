## Push to ECR

```console
# Connect docker with ECR
aws ecr get-login-password --region <your-ecr-region> | docker login -u AWS --password-stdin <your-ecr-domain>

# Optional
docker compose build

# Push image to ECR
docker compose push
```