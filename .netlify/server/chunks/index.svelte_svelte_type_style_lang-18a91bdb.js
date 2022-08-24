import { d as noop, f as safe_not_equal, g as subscribe, r as run_all, i as is_function } from "./index-f572932e.js";
var index_svelte_svelte_type_style_lang$D = "";
var index_svelte_svelte_type_style_lang$C = "";
var index_svelte_svelte_type_style_lang$B = "";
var index_svelte_svelte_type_style_lang$A = "";
var index_svelte_svelte_type_style_lang$z = "";
var index_svelte_svelte_type_style_lang$y = "";
var index_svelte_svelte_type_style_lang$x = "";
var index_svelte_svelte_type_style_lang$w = "";
var index_svelte_svelte_type_style_lang$v = "";
var index_svelte_svelte_type_style_lang$u = "";
var index_svelte_svelte_type_style_lang$t = "";
var index_svelte_svelte_type_style_lang$s = "";
var index_svelte_svelte_type_style_lang$r = "";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
const menuElement = writable();
derived(menuElement, ($menuElement, set) => {
  if (!$menuElement)
    return;
  const ro = new ResizeObserver(([entry]) => {
    let { offsetHeight } = entry.target;
    set(offsetHeight);
  });
  ro.observe($menuElement);
  return () => ro.disconnect();
}, 0);
var index_svelte_svelte_type_style_lang$q = "";
var index_svelte_svelte_type_style_lang$p = "";
var index_svelte_svelte_type_style_lang$o = "";
var index_svelte_svelte_type_style_lang$n = "";
var index_svelte_svelte_type_style_lang$m = "";
var index_svelte_svelte_type_style_lang$l = "";
var index_svelte_svelte_type_style_lang$k = "";
var index_svelte_svelte_type_style_lang$j = "";
var index_svelte_svelte_type_style_lang$i = "";
var index_svelte_svelte_type_style_lang$h = "";
var index_svelte_svelte_type_style_lang$g = "";
var index_svelte_svelte_type_style_lang$f = "";
var index_svelte_svelte_type_style_lang$e = "";
var index_svelte_svelte_type_style_lang$d = "";
var index_svelte_svelte_type_style_lang$c = "";
var index_svelte_svelte_type_style_lang$b = "";
var index_svelte_svelte_type_style_lang$a = "";
var index_svelte_svelte_type_style_lang$9 = "";
var index_svelte_svelte_type_style_lang$8 = "";
var index_svelte_svelte_type_style_lang$7 = "";
var index_svelte_svelte_type_style_lang$6 = "";
var index_svelte_svelte_type_style_lang$5 = "";
var index_svelte_svelte_type_style_lang$4 = "";
var index_svelte_svelte_type_style_lang$3 = "";
var index_svelte_svelte_type_style_lang$2 = "";
var index_svelte_svelte_type_style_lang$1 = "";
var index_svelte_svelte_type_style_lang = "";
