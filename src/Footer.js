import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider} from "@material-ui/core"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__song_info">
                <img src="https://www.sozbuyucusu.com/wp-content/uploads/2012/07/A-Question-of-Balance.jpg" alt=""/>
                <div className="footer__song_name">
                <h4>Melancholy Man</h4>
                <p>The Moody Blues</p>
                </div>
            </div>

            </div>
            <div className="footer__center">
                <ShuffleIcon fontSize="small" />
                <SkipPreviousIcon fontSize="small"/>
                <PlayCircleOutlineIcon fontSize="large" />
                <SkipNextIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                

            </div>
            <div className="footer__right">
            <Grid container spacing={1}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
            </div>
        </div>
    )
}

export default Footer
