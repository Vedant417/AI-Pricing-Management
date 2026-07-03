import React, { useEffect, useState } from "react";
import "./App.css";

function History() {

    const [files, setFiles] = useState([]);
    const [selectedLog, setSelectedLog] = useState(null);

    const loadHistory = async () => {

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/all-json-files"
            );

            const data = await response.json();

            setFiles(data.files || []);

        } catch (error) {

            console.error(error);
        }
    };

    const loadSingleFile = async (filename) => {

        try {

            const response = await fetch(
                `http://127.0.0.1:8000/api/json-file/${filename}`
            );

            const data = await response.json();

            setSelectedLog(data);

        } catch (error) {

            console.error(error);
        }
    };

    useEffect(() => {

        loadHistory();

    }, []);

    return (

        <div className="app">

            <div className="sidebar">

                <h1>Pricing History</h1>

                {files.map((file, index) => (

                    <div
                        key={index}
                        className="history-card"
                        onClick={() =>
                            loadSingleFile(file.filename)
                        }
                    >

                        <div className="filename">
                            {file.filename}
                        </div>

                        <div className="created">
                            {file.created}
                        </div>

                    </div>
                ))}

            </div>

            <div className="content">

                <h1>
                    Pricing Analysis Viewer
                </h1>

                {!selectedLog && (
                    <p>
                        Select a JSON history file.
                    </p>
                )}

                {selectedLog && (

                    <div className="json-viewer">

                        <h2>
                            {selectedLog.filename}
                        </h2>

                        <pre>
                            {JSON.stringify(
                                selectedLog.data,
                                null,
                                4
                            )}
                        </pre>

                    </div>
                )}

            </div>

        </div>
    );
}

export default History;