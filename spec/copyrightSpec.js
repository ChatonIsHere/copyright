let copyright = require("../copyright")

describe("Copyright", function() {
    it("should be able to run without input", function() {
        expect(copyright()).toEqual(`Copyright © Ethan Sawyer ${new Date().getFullYear()}`)
    })

    it("should run correctly with a malformed input", function() {
        expect(copyright("This is not a valid object")).toEqual(`Copyright © Ethan Sawyer ${new Date().getFullYear()}`)
    })

    it("should allow you to remove the extra Copyright text", function() {
        expect(copyright({ showFullText: false })).toEqual(`© Ethan Sawyer 2019`)
    })

    it("should accept a custom symbol", function() {
        expect(copyright({ symbol: "(c)" })).toEqual(`Copyright (c) Ethan Sawyer 2019`)
    })

    it("should accept a custom name", function() {
        expect(copyright({ copyrightHolder : "Chaton Vide" })).toEqual(`Copyright © Chaton Vide ${new Date().getFullYear()}`)
    })

    it("should accept a custom year", function() {
        expect(copyright({ initialYear: 2017 })).toEqual(`Copyright © Ethan Sawyer 2017`)
    })

    it("should allow a date range", function() {
        expect(copyright({ initialYear: 2017, lastUpdatedYear: 2019 })).toEqual(`Copyright © Ethan Sawyer 2017-2019`)
    })
})
