import axios from "axios";
import React, {useEffect, useState} from "react";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {Wrapper, Title, Quote, Author, Button, Footer, Header} from '../styles/Styles'
import {TwitterIcon, TwitterShareButton} from "react-share"

const baseURL = 'https://type.fit/api/quotes'


type QuoteType = {
    text: string
    author: string
}
export default function GetQuotes() {
    const [quote, setQuotes] = useState<any>("")
    const [error, setError] = useState("")

    useEffect(() => {
        getRandomQuote();
    }, []);

    async function getRandomQuote() {
        try {
            setError('');
            const quotesData = await axios.get(baseURL)
            const rand: number = Math.floor(Math.random() * quotesData.data.length)
            setQuotes(quotesData.data[rand])
        } catch (error: any) {
            setError(error.message);
        }
    }

    return (
        <Wrapper>
            <Header>
                <Title>Random quote generator</Title>
            </Header>
            <Button onClick={() => getRandomQuote()}>New Quote</Button>
            <Quote><FormatQuoteIcon fontSize={"large"}/>{quote.text}</Quote>
            <Author>— {quote.author ? quote.author : 'Author Unknown'}</Author>
            <Footer> <span>Share:</span>
                <TwitterShareButton url={`${quote.text} — ${quote.author ? quote.author : ''}`}>
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>
            </Footer>
        </Wrapper>
    )
}
