"use strict";
exports.__esModule = true;
exports.post1 = void 0;
exports.post1 = {
    title: 'Post 1',
    slug: 'post-1',
    _status: 'published',
    hero: {
        type: 'lowImpact',
        richText: [
            {
                children: [
                    {
                        text: 'Post 1'
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
                                    text: 'Add more layout building blocks for Post 1 below here'
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
        title: 'Post 1',
        description: 'Post 1',
        image: ''
    }
};
