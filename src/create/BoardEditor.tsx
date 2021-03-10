import { Typography, Card, CardContent } from '@material-ui/core';
import { NavBar } from '../navigation/NavBar';

function BoardEditor() {
    return (
        <div>
            <NavBar></NavBar>

            <Card>
                <CardContent>
                    <Typography variant="h5">Aerospace</Typography>
                </CardContent>
            </Card>
        </div>
        
    );
  }

  export default BoardEditor;
  