const comparePdf = require("compare-pdf");
const chai = require("chai");
const expect = chai.expect;
const config = require("../config");

describe("Compare Pdf Tests in Mocha + Chai", () => {
    let croppings = [
        { pageIndex: 0, coordinates: { width: 612, height: 483, x: 0, y: 139 } }
      ];

    it("Should be able to compare pdfs by image", async () => {
        let comparisonResults = await new comparePdf(config)
            .actualPdfFile("actualDraftReport_different")
            .baselinePdfFile("baselineDraftReport")
            .cropPages(croppings)
            .skipPageIndexes([1])
            .compare();
        expect(comparisonResults.status).to.equal("failed");
    });

    it("Should be able to compare pdfs by image", async () => {
        let comparisonResults = await new comparePdf(config)
            .actualPdfFile("actualDraftReport_same")
            .baselinePdfFile("baselineDraftReport")
            .cropPages(croppings)
            .skipPageIndexes([1])
            .compare();
        expect(comparisonResults.status).to.equal("passed");
    });
});
