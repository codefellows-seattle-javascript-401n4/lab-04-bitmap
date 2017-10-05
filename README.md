
*index.js* Entry-point and controller for program.
  Calls validateArgs(cli_args, transformOptions) which passes in the cmd line args and the user specified transform to the validate.js module.

*validate.js*
   Error handling for cli inputs and returns USAGE guidelines and exits process if bad input is received.

*readFile*
  Reads in raw bitmap data from file, and then runs callback

*metaConstr*
  Constructs a new object containing metadata properties for the bitmap

*transform*
  Reads in the transform option, bitmap, and metaData, and performs the appropriate transform.
  Returns a new buffer with the concatenated metadata

*writeFile*
  Takes in output file path, transform option (for file naming), the buffer and a callback

*_test_* Contains unit tests for modules and cli inputs. Run 'mocha' in cmd line to test.
