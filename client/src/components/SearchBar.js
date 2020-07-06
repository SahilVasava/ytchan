import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


const SearchBar = (props) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <Autocomplete
                id="combo-box-demo"
                className={classes.input}
                options={['hey', 'hi']}
                getOptionLabel={(option) => console.log(option)}
                style={{ width: 300 }}
                renderInput={(params) =>
                    <InputBase
                        className={classes.input}
                        {...params}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}

                    />
                }
            />

            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;




