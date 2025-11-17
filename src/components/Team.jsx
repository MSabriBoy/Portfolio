import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

/* Replace these with real images */
import leadEditorPic from '../assets/images/lead-editor.jpg';
import motionArtistPic from '../assets/images/motion-artist.jpg';
import coloristPic from '../assets/images/colorist.jpg';

const team = [
    {
        img: leadEditorPic,
        name: 'Arjun Mehta',
        role: 'Lead Video Editor',
        bio: 'Cuts storytelling magic with Adobe Premiere & DaVinci Resolve.',
    },
    {
        img: motionArtistPic,
        name: 'Riya Gupta',
        role: 'Motion Graphics Artist',
        bio: 'Creates stunning title animations in After Effects.',
    },
    {
        img: coloristPic,
        name: 'Sameer Khan',
        role: 'Colorist',
        bio: 'Balances tones & moods to give videos a cinematic feel.',
    },
];

const Team = () => (
    <section id="team" className="py-5 bg-dark text-white fade-in">
        <Container>
            <h2 className="text-center mb-5">Our Team Members</h2>

            <Row xs={1} md={2} lg={3} className="g-4">
                {team.map(({ img, name, role, bio }) => (
                    <Col key={name}>
                        <Card  bg="secondary" text="light" className="h-100 shadow-sm team-card">
                            <div className="ratio ratio-1x1">
                                <Card.Img
                                    src={img}
                                    alt={name}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-info">{role}</Card.Subtitle>
                                <Card.Text>{bio}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Team;
