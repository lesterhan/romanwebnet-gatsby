import React from 'react';
import { CardWrapper } from '../Card';
import Container from '../Container';

const MusicPlayer: React.FC = () => (
  <Container>
    <CardWrapper>
      <iframe
        title="playlist"
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1222657051&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </CardWrapper>
  </Container>
);

export default MusicPlayer;
