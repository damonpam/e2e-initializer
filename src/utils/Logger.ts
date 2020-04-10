import chalk from 'chalk';
import { emoji, get } from 'node-emoji';

class Logger {
  public redChalk = chalk.red;
  private greenChalk = chalk.green;
  private yellowChalk = chalk.yellow;

  public exit(message: string, code: number): void {
    console.log(this.redChalk(`${emoji.door} ${message}`));
    process.exit(code);
  }

  public error(message: string, emoji: string = 'octagonal_sign'): void {
    throw new Error(this.redChalk(`${get(emoji)}  Ops! ${message}`));
  }

  public info(message: string, emoji?: string): void {
    const msg = emoji ? `${get(emoji)}  ${message}` : message;
    console.log(msg);
  }

  public success(message: string, emoji: string = 'white_check_mark'): void {
    console.log(this.greenChalk(`${get(emoji)}  ${message}`));
  }

  public warning(message: string, emoji: string = 'warning'): void {
    console.log(this.yellowChalk(`${get(emoji)}  ${message}`));
  }
}

export const logger = new Logger();
