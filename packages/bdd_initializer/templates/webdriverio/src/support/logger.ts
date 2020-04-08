export const logger = require('log-beautify');

logger.setColors({
  success: '#66AA33',
  info: '#3262dd',
  error: '#CC3266'
});

logger.setSymbols({
  success: '\n✅ ',
  info: '\n',
  error: '\n❌ '
});
