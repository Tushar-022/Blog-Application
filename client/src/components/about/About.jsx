
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Tushar Khandelwal</Typography>
                <Text variant="h5">This is Tushar Khandelwal from IT branch NIT Jalandhar<br />
                    
Skilled in C, CPP, Java, and web technologies like ReactJS, NodeJS, MongoDB. LeetCode 3 Star,
 GFG Top 100, Codekaze Rank 9. Love competitive programming 
 and Android dev. Committed to learning, contributing, and growing.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Tushar-022" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                
            </Wrapper>
        </Box>
    )
}

export default About;