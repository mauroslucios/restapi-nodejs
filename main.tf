terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-08c40ec9ead489470"
  instance_type = "t2.micro"
  key_name      = "mauroslucios"
  tags = {
    Name = "RestApi-NodeJs"
  }
}
