import { LinkedListTests } from "./components/data-structures/linked-list/LinkedListTests.mjs";
export let TestRunner = (function()
{
    function RunTests()
    {
        LinkedListTests.RunTests();
    }

    return {
        RunTests
    }
})();