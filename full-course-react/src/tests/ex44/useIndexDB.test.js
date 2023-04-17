import { renderHook } from "@testing-library/react";
import useIndexDB from "../../ex44_hooks/useIndexDBHook";
import { openDB } from "idb";



test("At initialization", async () => {
    const db = await openDB("TestDB", 1, {
        upgrade(db) {
          db.createObjectStore("test_items");
        },
    });
    const {result}  = renderHook(()=>useIndexDB("TestDB", "test_items","item1", 1));
    expect(result.current).toEqual(1)
    //   // const mydb = await idb.openDB("useIndexDB");
    //   await waitFor(() => {
    //     expect(result.current[2]).toBe(true);
    //   });
    //   const valueFromDB = await mydb.get("state", "foo");
    //   expect(valueFromDB).toEqual(6);
    });
