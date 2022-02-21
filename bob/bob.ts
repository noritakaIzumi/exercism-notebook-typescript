export function hey(message: string): unknown {
    message = message.trim();
    const allCapital = message.toLowerCase() !== message && message.toUpperCase() === message;
    const isQuestion = message.slice(-1) === '?';
    if (allCapital && isQuestion) {
        return "Calm down, I know what I'm doing!";
    }
    if (allCapital) {
        return "Whoa, chill out!";
    }
    if (isQuestion) {
        return "Sure.";
    }
    if (message === '') {
        return "Fine. Be that way!";
    }
    return "Whatever.";
}
