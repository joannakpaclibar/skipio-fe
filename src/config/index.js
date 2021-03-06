import development from './environment/development';
import production from './environment/production';

const configs = {
	'development' : development,
	'production'  : production
}

export default configs[ process.env.NODE_ENV ] || configs.development;