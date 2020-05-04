default:
	@echo 'make [deploy-aws|deploy-netlify]'

deploy-netlify:
	netlify login
	netlify deploy --prod --open