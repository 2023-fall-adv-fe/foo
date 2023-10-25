import { durationFormatter } from 'human-readable';

const format = durationFormatter<string>();

const justDaysFormat = durationFormatter<string>({
	allowMultiples: ["y", "mo", "d"]
});

export type GameResult = {
    won: boolean;
    start: string;
    end: string;
};

export interface GeneralFactsDisplay {
    totalGames: number;
    lastPlayed: string; 
    shortestGame: string;
    longestGame: string;
};

export const getGeneralFacts = (
    results: GameResult[]
    , fromDateMilliseconds: number 
): GeneralFactsDisplay => {

    const gameEndDatesInMilliseconds = results
        .map(x => Date.parse(x.end))
        .filter(x => x <= fromDateMilliseconds)
    ;

    const gameDurationsInMilliseconds = results
        .filter(x => Date.parse(x.end) <= fromDateMilliseconds)
        .map(x => Date.parse(x.end) - Date.parse(x.start))
    ;

    return {
        totalGames: results.length
        , lastPlayed: justDaysFormat(fromDateMilliseconds - Math.max(...gameEndDatesInMilliseconds))
        , shortestGame: format(Math.min(...gameDurationsInMilliseconds))
        , longestGame: format(Math.max(...gameDurationsInMilliseconds))
    };
};