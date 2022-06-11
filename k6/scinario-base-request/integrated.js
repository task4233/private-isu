// integrated.js
import initialize from "./initialize.js";
import comment from "./comment.js";
import postimage from "./postimage.js";

export {
    initialize,
    comment,
    postimage
};

// The scinario is 
// 1.   initialize    (0[s] ~10[s])
// 2-1. leave comments(12[s]~42[s])
// 2-2. post images   (12[s]~42[s])
export const options = {
    scenarios: {
        initialize: {
            executor: "shared-iterations", // multiple virtual users
            vus: 1,
            iterations: 1,
            exec: "initialize",
            maxDuration: "10s",
        },
        comment: {
            executor: "constant-vus",
            vus: 4,
            duration: "30s",
            exec: "comment",
            startTime: "12s",
        },
        postImage: {
            executor: "constant-vus",
            vus: 2,
            duration: "30s",
            exec: "postimage",
            startTime: "12s",
        },
    },
};

export default function() {}

