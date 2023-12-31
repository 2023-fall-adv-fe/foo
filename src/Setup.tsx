import { Alert, Box, Checkbox, FormControlLabel, Snackbar, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

interface SetupProps {
    num: number;
    setNum: any;
    setTitle: (title: string) => void;
    previousPlayers: string[];
    setChosenPlayers: (players: string[]) => void;
};

export const Setup: FC<SetupProps> = ({
    num
    , setNum
    , setTitle
    , previousPlayers
    , setChosenPlayers
}) => {

    const [availablePlayers, setAvailablePlayers] = 
        useState(previousPlayers.map(x => ({
            name: x 
            , checked: false
        })));

    const [showWarning, setShowWarning] = useState(false);

    const [newPlayerName, setNewPlayerName] = useState("");

    useEffect(
        () => setTitle("Choose players then start...")
        , []
    );

    // "Calculated" state is better than "duplicated" state ! ! !
    const atLeastTwoPlayersChecked = availablePlayers
        .filter(x => x.checked)
        .length >= 2
    ;

    console.log("Setup called ! ! !");

    const navigate = useNavigate();

    // let num = 1;
    // const [num, setNum] = useState(1);

    const validateAndAddNewPlayer = () => {

        // Validate here.
        if (
            newPlayerName.length == 0
        ) {
            return;
        }

        const duplicatePlayerName = availablePlayers.some(
            x => x.name.toUpperCase() == newPlayerName.toLocaleUpperCase()
        );

        if (!duplicatePlayerName) {
            setAvailablePlayers(
                [
                    ...availablePlayers
                    , {
                        name: newPlayerName
                        , checked: true
                    }
                ].sort(
                    (a, b) => a.name.localeCompare(b.name)
                )
            );
        } else {

            // Just 'check' the player instead.
            setAvailablePlayers(
                availablePlayers.map(x =>({
                    ...x
                    , checked: x.name.toUpperCase() == newPlayerName.toLocaleUpperCase()
                        // Always 'check' a duplicate player being added.
                        ? true          
                        // Don'te mess with checked state for non-duplicate players.
                        : x.checked     
                }))
            );
        }

        setNewPlayerName("");
    };

    return (
        <Box
            sx={{ mt: 2 }}
        >
            <Snackbar 
                anchorOrigin={{ 
                    vertical: "top"
                    , horizontal: "center" 
                }}
                open={showWarning} 
                autoHideDuration={2500} 
                onClose={
                    () => setShowWarning(false)
                }
            >
                <Alert 
                    severity="warning" 
                    sx={{ 
                        width: '100%' 
                    }}
                >
                    Choose at least two players...
                </Alert>
            </Snackbar>
            <Button
                variant={atLeastTwoPlayersChecked ? "contained" : "outlined"}
                size="large"
                onClick={
                    // () => navigate('/play')
                    () => {
                        // setNum(num + 1);
                        // console.log(num);
                        
                        if (!atLeastTwoPlayersChecked) {
                            setShowWarning(true);
                            return;
                        }

                        setChosenPlayers(
                            availablePlayers
                                .filter(x => x.checked)
                                .map(x => x.name)
                        );

                        setNum(num + 1);
                        navigate('/play');
                    }
                }
                sx={{
                    pt: 3
                    , pb: 3
                    , width: {
                        xs: '100%'
                        , md: 'inherit'
                    }
                }}
            >
                <Typography
                    fontSize={20}
                >
                    Start the Game
                </Typography>
            </Button>
            <Box
                sx={{
                    mt: 2
                    , display: "flex"
                    , flexDirection: "row"
                    , gap: 2
                    , maxWidth: "900px"
                }}
            >
                <TextField 
                    label="Enter new player name"
                    variant="outlined"
                    fullWidth
                    value={newPlayerName}
                    onChange={
                        (e) => setNewPlayerName(e.target.value)
                    }
                />
                <Button
                    variant={newPlayerName.length == 0 ? "outlined" : "contained"}
                    onClick={
                        validateAndAddNewPlayer
                    }
                >
                    Add
                </Button>
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    mt: 2
                    , mb: 2
                }}
            >
                {
                    availablePlayers.map(x => (
                        <Grid
                            key={x.name}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                        >
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        checked={x.checked} 
                                        onChange={
                                            (e) => setAvailablePlayers(
                                                [
                                                    ...availablePlayers.map(y => ({
                                                        name: y.name
                                                        , checked: y.name == x.name ? !y.checked : y.checked
                                                    }))
                                                ]
                                            )
                                        }
                                    />
                                } 
                                label={x.name} 
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};