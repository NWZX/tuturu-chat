// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.vue'],
    theme: {
        extend: {
            backgroundImage: theme => ({
                mayuri:
                    "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa8b3250-5653-44db-85b8-4f4d422b2adb/dcp95ut-1e486e39-50a2-4f3f-8898-aed9e9b57827.png/v1/fill/w_1600,h_900,strp/mayushii_by_phantomthieft_dcp95ut-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC9mYThiMzI1MC01NjUzLTQ0ZGItODViOC00ZjRkNDIyYjJhZGJcL2RjcDk1dXQtMWU0ODZlMzktNTBhMi00ZjNmLTg4OTgtYWVkOWU5YjU3ODI3LnBuZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.BneXb8OG-iyfQgpPSEww68Qtt3X1TeYvyhsWHW39PnE')",
            }),
        },
        fontFamily: {
            code: ['Cascadia Code', 'Consolas', 'Courier New', 'monospace'],
            roboto: ['Roboto'],
        },
    },
    variants: {},
    plugins: [],
};
