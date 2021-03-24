import { Typography, Card, CardContent } from '@material-ui/core';
import NavBar from '../navigation/NavBar';
import NavLink from '../navigation/NavLink';

function BoardEditor() {
    return (
        <div>
            <NavBar title="Boards">
                <NavLink link="/" text="Home"></NavLink>
            </NavBar>
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5">Aerospace</Typography>
                    </CardContent>
                </Card>
            </div>
            
        </div>
        
    );
  }

  export default BoardEditor;
  