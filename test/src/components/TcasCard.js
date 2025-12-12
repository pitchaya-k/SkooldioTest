// FIXME: No interface provided yet
// FIXME: Fonts not applied correctly
function TcasCard(cardData) {
  console.log("Card Data:", cardData.cardData);
  const data = cardData.cardData;
  const university = data?.faculty?.university;
  const faculty = data?.faculty;
  const scores = data?.score;
  const roundSeats = data?.roundSeats;

  const renderRoundSeats = () => {
    return (
      <div className="Round-Seats-Container">
        <div
          className="Round-Seat-Oval"
          style={{
            backgroundColor: Number(roundSeats[0]) > 0 ? "#2ecc71" : "#5f5f5f",

            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              // verticalAlign: "center",
              textAlign: "center",
            }}
          >
            1
          </div>
        </div>
        <div
          className="Round-Seat-Oval"
          style={{
            backgroundColor: Number(roundSeats[1]) > 0 ? "#2ecc71" : "#5f5f5f",

            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={
              {
                // marginTop: "4PX",
              }
            }
          >
            2
          </div>
        </div>
        <div
          className="Round-Seat-Oval"
          style={{
            backgroundColor: Number(roundSeats[2]) > 0 ? "#2ecc71" : "#5f5f5f",

            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={
              {
                // marginTop: "4PX",
              }
            }
          >
            3
          </div>
        </div>
        <div
          className="Round-Seat-Oval"
          style={{
            backgroundColor: Number(roundSeats[3]) > 0 ? "#2ecc71" : "#5f5f5f",

            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={
              {
                // marginTop: "4PX",
              }
            }
          >
            4
          </div>
        </div>
        <div
          className="Round-Seat-Oval"
          style={{
            backgroundColor: Number(roundSeats[4]) > 0 ? "#2ecc71" : "#5f5f5f",

            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={
              {
                // marginTop: "4PX",
              }
            }
          >
            5
          </div>
        </div>
      </div>
    );
  };

  // Render number in format xx,xxx.xx
  const formatNumber = (num) => {
    if (num == null || isNaN(num)) return "-";
    return Number(num).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="Rectangle-Copy">
      {/* Facaulty */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          justifyItems: "start",
          gap: "16px",
          width: "100%",
        }}
        className="Header-Divider"
      >
        <img src={data?.logo ?? "/Images/engi.svg"} className="Header-Image" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <span className="Faculty-Name">{faculty.name}</span>
          <span className="Department-Name">{data.name}</span>
          <span className="University-Name">{university.name}</span>
        </div>
        <img src="/Images/page-1.svg" className="Header-Heart" />
      </div>
      {/* Body */}
      {/* Tcas Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
        }}
      >
        {/* Round Seats */}
        <div className="Body-Header-Text">รอบที่เปิด</div>

        {renderRoundSeats()}
      </div>
      {/* Score */}
      {scores != null && scores && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* XXX: If score exist */}
            <div className="Score-Header-Text">
              รอบที่ 4: {scores.scoreType}
            </div>
            <button
              className="Edit-Score-Button"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="Edit-Score-Button-Text">แก้ไขคะแนน</div>
              <img src="/Images/group-3-copy-4.svg" alt="Edit Icon" />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <img className="My-Score-Image" src="/Images/page-1-copy-2.svg" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="My-Score-Text">คะแนนของคุณคือ</div>
              <div className="My-Score-Number">{formatNumber(28000)}</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="Year-Score"
            >
              <div children="Year-Score-Number">{formatNumber(scores.max)}</div>
              <div children="Year-Score-Text">
                คะแนนสูงสุด {scores.year % 100}
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="Year-Score"
            >
              <div children="Year-Score-Number">{formatNumber(scores.avg)}</div>
              <div children="Year-Score-Text">
                คะแนนเฉลี่ย {scores.year % 100}
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="Year-Score"
            >
              <div children="Year-Score-Number">{formatNumber(scores.min)}</div>
              <div children="Year-Score-Text">
                คะแนนต่ำสุด {scores.year % 100}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Other Info FIXME: ไม่ทัน*/}
    </div>
  );
}

export default TcasCard;
