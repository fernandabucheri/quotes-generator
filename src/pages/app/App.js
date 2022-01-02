import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import bookImg from '../../images/book.png';
import pageSound from '../../sounds/virarpagina.mp3';
import {Quotes} from '../../components';
import {getQuote} from '../../services';

const audio = new Audio(pageSound);

export function App() {
    const isMounted = useRef(true);
    const [quote, setQuote] = useState({
        speaker: 'Loading speaker...',
        quote: 'Loading Quote'
    });

    const onUpdate = async () => {
        const resQuote = await getQuote();

        if (isMounted.current) {
            setQuote(resQuote);
            audio.play();
        }
    };

    useEffect(() => {
        onUpdate();
        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <Content>
            <Quotes {...quote} onUpdate={onUpdate}/>
            <BookImg alt="book" src={bookImg}/>
        </Content>
    );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 50px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BookImg = styled.img`
  max-width: 50vw;
`;