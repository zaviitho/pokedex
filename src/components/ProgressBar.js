import React from 'react';
import { Progress, Grid, Label } from 'semantic-ui-react';

const ProgressBar = ({value, label, total = '150', type = 'ratio', size = 'normal'}) =>{
return (
  <>
  <Grid columns={2} className="progress-bar">
    <Grid.Column>
      <Grid.Row width={4} textAlign='right'><Label size='small'>{ label }:</Label></Grid.Row>
      <Grid.Row width={12}><Progress value={ value } total={ total } progress={ type } indicating size={ size } /></Grid.Row>
    </Grid.Column>
    </Grid>
</>
)
}
export default ProgressBar