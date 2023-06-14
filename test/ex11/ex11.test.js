/**
 * @jest-environment jsdom
 */

const { enhancedQuerySelectorAll } = require("../../src/ex11/ex11");


test("Test should return the Nodelist with the 3 selected elements", async () => {
    document.body.innerHTML = `
    <section>
      <div id="1" class="note">
        <input type="checkbox" class="is-complete" checked />
      </div>
      <div id="2" class="note"></div>
      <div id="3" class="note">
        <input type="checkbox" class="is-complete" checked />
      </div>
      <div id="4" class="note"></div>
      <div id="5" class="note">
        <input type="checkbox" class="is-complete" checked />
      </div>
    </section>`;

    const nodes = enhancedQuerySelectorAll("div.note < input.is-complete[checked]");
    expect(nodes).toHaveLength(3);
    expect(nodes[0].id).toBe("1");
    expect(nodes[1].id).toBe("3");
    expect(nodes[2].id).toBe("5");
});



test("Test should behave as a normal queryselector ", async () => {
    document.body.innerHTML = `
    <section>
      <ul class="class-1">
        <li id="1">lorem</li>
        <li id="2">lorem</li>
        <li id="3">lorem</li>
        <li id="4">lorem</li>
      </ul>
    </section>`;
    const nodes = enhancedQuerySelectorAll("ul > li");
    expect(nodes).toHaveLength(4);
    expect(nodes[0].id).toBe("1");
    expect(nodes[1].id).toBe("2");
    expect(nodes[2].id).toBe("3");
    expect(nodes[3].id).toBe("4");
  });



test("Should select only direct parents", () => {
    document.body.innerHTML = `
    <section>
      <div id="5" class="note">
        <div class="something">
          <span><input type="checkbox" class="is-complete" checked /></span>
        </div>
      </div>
    </section>
  `;
    const nodes = enhancedQuerySelectorAll(
      "div.note < span input.is-complete[checked]"
    );
    expect(nodes).toHaveLength(0);
  });
