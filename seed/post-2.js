"use strict";
exports.__esModule = true;
exports.post2 = void 0;
exports.post2 = {
    title: 'Post 2',
    slug: 'post-2',
    _status: 'published',
    hero: {
        type: 'lowImpact',
        richText: [
            {
                children: [
                    {
                        text: 'Post 2'
                    },
                ],
                type: 'h1'
            },
        ],
        links: [],
        media: ''
    },
    layout: [
        {
            blockName: 'Content Block',
            blockType: 'content',
            backgroundColor: 'white',
            columns: [
                {
                    size: 'full',
                    richText: [
                        {
                            children: [
                                {
                                    text: 'Add more layout building blocks for Post 2 below here'
                                },
                            ]
                        },
                    ],
                    enableLink: false,
                    link: {
                        reference: {
                            value: '',
                            relationTo: 'pages'
                        },
                        url: '',
                        label: ''
                    }
                },
            ]
        },
    ],
    meta: {
        title: 'Post 2',
        description: 'Post 2',
        image: ''
    }
};
