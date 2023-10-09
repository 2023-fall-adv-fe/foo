import Button from '@mui/material/Button';
import SmartDisplay from '@mui/icons-material/SmartDisplay';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay } from './foo-game-results';
import { FC } from 'react';
import { Typography, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay;
}
export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {

    const navigate = useNavigate();

    return (
        <>
        <h3>
            Foo Companion App
        </h3>
        <Button
            variant="contained"
            size="large"
            sx={{
                mt: 3
                , pt: 3
                , pb: 3
                , width: {
                    xs: '100%'
                    , md: 'inherit'
                }
            }}
            onClick={
                () => navigate('/setup')
            }
        >
            <Typography
                fontSize={20}
            >
                Play a Game of Foo
            </Typography>
        </Button>
        <Grid
            container
            spacing={3}
        >
            <Grid
                xs={12}
                md={6}
            >
                <Paper
                    elevation={3}
                    sx={{
                        overflow: 'hidden'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 20
                            , ml: 3
                            , mt: 3
                            , mb: 3
                        }}
                    >
                    </Typography>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        fontSize={20}
                                    >
                                        Total Games
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        fontSize={20}
                                    >
                                    {winningPercentageDisplay.totalGames}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        fontSize={20}
                                    >
                                        Winning Percentage
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        fontSize={20}
                                    >
                                        {winningPercentageDisplay.winningPercentage}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </Paper>
            </Grid>
        </Grid>
        <h4>
            {`Winning Percentage: ${winningPercentageDisplay.winningPercentage}`}
        </h4>
        </>
    );
};