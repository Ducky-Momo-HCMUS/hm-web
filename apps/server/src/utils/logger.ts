import { format, transports, createLogger } from 'winston';

export const logger = createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transports: [
    new transports.Console({
      format:
        process.env.NODE_ENV === 'development'
          ? format.simple()
          : format.combine(format.timestamp(), format.json()),
    }),
  ],
});
