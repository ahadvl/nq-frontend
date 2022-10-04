import React from "react";
import { Page, Main, Container, Stack, Gap, Hr, Header, Button } from "ui";
import { Link } from "react-router-dom";

interface SuraItems {
    title: string;
    description: string;
    p: string;
}

const SuraLists: Array<SuraItems> = [
    {
        title: "الْفَاتِحَه+",
        description: "The Opener",
        p: "Al-Fatihah",
    },
    {
        title: "البَقَرَة+",
        description: "The Cow",
        p: "Al-Baqarah",
    },
    {
        title: "آل عِمرَان+",
        description: "Family of Imran",
        p: "Ali 'Imran",
    },
    {
        title: "النِّسَاء+",
        description: "The Women",
        p: "An-Nisa",
    },
    {
        title: "المَائدة+",
        description: "The Table Spread",
        p: "Al-Ma'idah",
    },

    {
        title: "الاٴنعَام+",
        description: "The Cattle",
        p: "Al-An'am",
    },
];

function Search() {
    return (
        <Page>
            <Header>
                <Link to="/">
                    <Button>Cancel</Button>
                </Link>
                <input
                    style={{ background: "#7d7d7d15" }}
                    type="Search"
                    placeholder="Search Sura, Phrase or numbers(Sura:Aya, Page, Juz, Hizb)"
                />
            </Header>
            <Main>
                <Container maxWidth="md">
                    <h2>All: Sura Page Juz Hizb</h2>
                    <Hr />
                </Container>
            </Main>
        </Page>
    );
}

export default Search;
