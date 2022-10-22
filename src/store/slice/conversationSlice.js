import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: {
        0: {
            name: '(432) 123-1234',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 19:32:41',
            lastMessage: 'abc'
        },
        1: {
            name: '(123) 123-3421',
            number: '5328956293',
            lastUpdatedTime: '10 20 2022 19:32:44',
            lastMessage: 'abc'
        },
        2: {
            name: '(850) 242-2423',
            number: '5328956293',
            lastUpdatedTime: '9 21 2022 19:32:41',
            lastMessage: 'abc'
        },
        3: {
            name: '(324) 132-7491',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 18:32:41',
            lastMessage: 'abc'
        },
        4: {
            name: '(902) 232-8022',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        5: {
            name: '324',
            number: '5328956293',
            lastUpdatedTime: '10 21 2021 17:32:41',
            lastMessage: 'abc'
        },
        6: {
            name: '(234) 3242-23423',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        7: {
            name: 'fwe',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        8: {
            name: '(242) 232-2342',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        9: {
            name: '(234) 232-2342',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        10: {
            name: 'dsds',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        11: {
            name: '(902) 32424242',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        12: {
            name: '(3242) 2342342323',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },
        13: {
            name: 'abc',
            number: '5328956293',
            lastUpdatedTime: '10 21 2022 17:32:41',
            lastMessage: 'abc'
        },

    },
    chatHistory: {
        0: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        1: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        2: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        3: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        4: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        5: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        6: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        7: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        8: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        9: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        10: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        11: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        12: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
        13: [
            {
                from: 'other',
                text: 'abcdbfeuiw',
                time: '10 21 2022 19:32:41'
            },
            {
                from: 'you',
                text: 'abcdbfeuiw',
                time: '10 21 2022 22:32:41'
            }
        ],
    }
}

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {

    }
});

export default conversationSlice.reducer;