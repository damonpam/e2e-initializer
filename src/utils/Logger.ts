import chalk from 'chalk';
import { get } from 'node-emoji';

class Logger {
  public errorChalk = chalk.red;
  private successChalk = chalk.green;
  private warningChalk = chalk.yellow;

  public error(message: string, emoji: string = 'octagonal_sign'): void {
    throw new Error(this.errorChalk(`${get(emoji)} Ops! ${message}`));
  }

  public info(message: string, emoji?: string): void {
    const msg = emoji ? chalk(`${get(emoji)} ${message}`) : chalk(message);
    console.log(msg);
  }

  public success(message: string, emoji: string = 'white_check_mark'): void {
    console.log(this.successChalk(`${get(emoji)}  ${message}`));
  }

  public warning(message: string, emoji: string = 'warning'): void {
    console.log(this.warningChalk(`${get(emoji)} ${message}`));
  }
}

export const logger = new Logger();
