import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        // marginLeft: theme.spacing(1),
        flex: 1,
        border: '0 !important',
        // backgroundColor: theme.palette.background.paper
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    autoComplete: {
        border: 0,
    },
    notchedOutline: {
        border: 0
        /* borderWidth: "1px",
        borderColor: "yellow !important" */
    }
}));


const SearchBar = (props) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            {/* <Autocomplete
                // style={{ width: '100%' }}
                fullWidth
                id="tags-standard"
                multiple
                options={['hey', 'hi']}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                onChange={(e, v) => console.log(e, v)}
                renderInput={(params) => (

                    <InputBase
                        {...params}
                        ref={params.InputProps.ref}
                        inputProps={params.inputProps}
                        placeholder="Favorites"
                    />
                )}
            /> */}
            <Autocomplete
                multiple
                className={classes.input}
                options={props.tags}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                onChange={(event, values) => props.setValues(values)}
                renderInput={(params) =>
                    <TextField
                        variant="outlined"
                        className={classes.input}
                        {...params}
                        InputProps={

                            {
                                ...params.InputProps,
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                        placeholder="Filter Channels using Tags"

                    />

                }
            />
            {/* <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton> */}


        </Paper>
    );
}

export default SearchBar;




