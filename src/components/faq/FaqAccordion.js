import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import $ from 'jquery';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function FaqAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  
  }
  // $('.MuiButtonBase-root').click(function(e){
  //   alert();
        
  //     });
  return (
    <div className={classes.root}>
      <ExpansionPanel className="wow fadeInUp" data-wow-delay="0.3s" animation-delay="0.3s" expanded={expanded === 'panel1'} onChange={handleChange('panel1')} TransitionProps={{ unmountOnExit: true }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          
          <Typography className={classes.secondaryHeading}>Can I edit videos as well, or only pictures?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="wow fadeInUp" data-wow-delay="0.5s" animation-delay="0.5s" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          
          <Typography className={classes.secondaryHeading}>
          I have found a bug, what should I do now?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="wow fadeInUp" data-wow-delay="0.7s" animation-delay="0.7s" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        
          <Typography className={classes.secondaryHeading}>
          What are the benefits of subscription?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="wow fadeInUp" data-wow-delay="0.9s" animation-delay="0.9s" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.secondaryHeading}>
          How can i cancel my subscription?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="description">
          You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="wow fadeInUp" data-wow-delay="1.1s" animation-delay="1.1s" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.secondaryHeading}>
          Is there an option to modify the speed?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          You can use all the features of this app after subscription. Without any subscription you can't use some of the premium features.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
export default FaqAccordion;
