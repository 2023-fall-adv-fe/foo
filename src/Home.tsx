import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay } from './foo-game-results';
import { FC } from 'react';
import { Typography, Paper, Table, TableBody, TableRow, TableCell, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay
}

export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {

    const navigate = useNavigate();

    return (
        <>
        <Button
            variant="contained"
            size="large"
            sx={{
                mt: 3
                , mb: 3
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
                            , ml: 2
                            , mt: 1
                        }}
                        color='text.disabled'
                    >
                        GENERAL
                    </Typography>
                    <Box
                        sx={{
                            pl: 1
                            , pr: 1
                        }}
                    >
                        <Table
                            sx={{
                                mt: 0
                            }}
                        >
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
                                </TableRow>
                                <TableRow
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        }
                                    }}
                                >
                                    <TableCell>
                                        <Typography
                                            fontSize={20}
                                        >
                                            Winning %
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
                                <TableRow
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        }
                                    }}
                                >
                                    <TableCell>
                                        <Typography
                                            fontSize={20}
                                        >
                                            Last Played
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            fontSize={20}
                                        >
                                            3d ago
                                        </Typography>
                                    </TableCell>
                                </TableRow> 
                                <TableRow
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        }
                                    }}
                                >
                                    <TableCell>
                                        <Typography
                                            fontSize={20}
                                        >
                                            Shortest Game
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            fontSize={20}
                                        >
                                            5m 42s
                                        </Typography>
                                    </TableCell>
                                </TableRow> 
                                <TableRow
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        }
                                    }}
                                >
                                    <TableCell>
                                        <Typography
                                            fontSize={20}
                                        >
                                            Longest Game
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            fontSize={20}
                                        >
                                            13m 17s
                                        </Typography>
                                    </TableCell>
                                </TableRow> 
                            </TableBody>
                        </Table>
                    </Box>
                </Paper>
            </Grid>
      </Grid>
        </>
    );
};