import LinkedList from "./LinkedList.mjs";

export let LinkedListTests = (function()
{
    function RunTests()
    {
        LinkedListTest_AppendToList();
        LinkedListTest_RemoveFirstNode();
        LinkedListTest_RemoveFromEmptyList();

    }

    function LinkedListTest_AppendToList()
    {
        console.log('[LinkedListTest] - AppendToList');
        let test_list = new LinkedList();
        let expected_list = '4 -> 3 -> 2 -> 1 -> 0 -> ';
        for(let i = 0; i < 5; i++)
        {
            test_list.appendToHead(i);
        }
        if(test_list.toString() === expected_list)
        {
            console.log('[LinkedListTest][SUCCESS] - Successfully appended elements to the list');
        }
        else
        {
            console.error('[LinkedListTest][FAILURE] - Could not append items to the list');
        }
    }

    function LinkedListTest_RemoveFirstNode()
    {
        console.log('[LinkedListTest] - RemoveFirstNode');
        let test_list = new LinkedList();
        test_list.appendToHead(1);
        test_list.removeFromFront();
        if(test_list.isEmpty())
        {
            console.log('[LinkedListTest][SUCCESS] - Successfully removed the first node')
        }
        else
        {
            console.error('[LinkedListTest][FAILURE] - Was not able to remove the first node');
        }
    }

    function LinkedListTest_RemoveFromEmptyList()
    {
        console.log('[LinkedListTest] - RemoveFromEmptyList');
        let test_list = new LinkedList();
        try
        {
            test_list.removeFromFront();

            // This is code that shouldn't execute
            console.error('[LinkedListTest][FAILURE] - The removal from an empty list has failed');
        }
        catch(err)
        {
            // This is the expected case
            console.log(`[LinkedListTest][SUCCESS] - ${err}`);
        }
    }

    return {
        RunTests
    }
})();