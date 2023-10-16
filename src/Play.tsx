import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './foo-game-results';
import { FC } from 'react';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
};

export const Play: FC<PlayProps> = ({addNewGameResult}) => {

    const nav = useNavigate();

    const gameOver = (won: boolean) => {
        addNewGameResult({
            won: won
            , start: ""
            , end: ""
        });
        nav(-2);
    }

    return (
        <>
        <h3>
            Play &amp; Collect Data
        </h3>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => gameOver(true)
            }
        >
            I won
        </Button>
        <Button
            variant="outlined"
            size="large"
            onClick={
                () => gameOver(false)
            }
        >
            I lost
        </Button>
        </>
    );
};