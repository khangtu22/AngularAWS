require('dotenv').config();
const { writeFile } = require('fs');

const targetPath = `./environment.ts`;

const environmentFileContent = `
export const environment = {
    GOOGLE_SITE_KEY: "${process.env.GOOGLE_SITE_KEY}",
};
`;

// tslint:disable-next-line:only-arrow-functions
writeFile(targetPath, environmentFileContent, function(err) {
    if (err) {
        console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
    console.log(`Key is: ${process.env.GOOGLE_SITE_KEY}`);
});
