import React from 'react'

const WLogo = ({ size, color, containerStyle, borderColor, borderSize }) => (
  <React.Fragment>
    {borderColor ? (
      <div style={{ ...containerStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', height: size + borderSize || 0, width: size + borderSize || 0, backgroundColor: borderColor, borderRadius: '50%' }}>
        <svg viewBox='0 0 9050 9050' height={size} width={size}>
          <g fill={color}>
            <path d='M4130 9039c-592-57-1097-199-1615-454-624-308-1194-780-1605-1330-495-662-786-1386-887-2210-26-215-26-825 0-1035 94-743 326-1381 722-1980C1506 879 2726 147 4105 15c208-20 632-20 840 0 711 68 1365 287 1971 661 297 182 596 425 869 705 649 666 1080 1538 1220 2469 61 407 61 945 0 1350-130 865-504 1667-1078 2315-408 461-876 819-1402 1074-274 132-436 197-677 270-317 96-599 150-938 181-133 12-654 11-780-1zm610-389c613-35 1145-180 1675-454 435-225 779-485 1124-851 535-568 913-1317 1045-2074 52-297 61-396 61-741 0-412-27-644-116-1008-78-320-162-515-269-623-105-106-170-103-285 15-151 155-302 447-665 1286-238 551-341 777-518 1145-68 143-151 314-182 380-212 443-418 864-529 1079-313 612-353 686-397 729-50 50-121 30-172-51-35-53-65-117-265-552-176-384-162-354-402-875-113-247-232-505-263-572-44-97-59-120-69-111-7 6-13 14-13 18s-70 151-155 325c-85 175-155 319-155 320 0 10-456 927-552 1110-205 389-222 415-278 415-70 0-117-55-194-222-19-40-82-179-141-308s-123-269-142-310-166-358-325-705c-160-346-329-715-378-820-48-104-99-215-113-245-13-30-118-257-232-505-114-247-254-551-310-675-92-201-206-450-321-700-107-234-129-263-202-262-58 1-97 25-183 111-115 115-199 250-242 391-198 641-236 1321-111 1980 118 623 368 1192 748 1705 201 271 509 582 796 806 227 177 601 401 845 504 407 173 734 264 1140 316 273 36 489 44 745 29zM3723 6230c269-577 597-1296 597-1308 0-8-192-430-605-1327-40-88-117-254-170-370-120-261-172-351-252-436-71-75-157-125-268-157-96-28-131-33-274-41-104-6-126-10-137-26-21-29-17-43 19-61 29-16 72-16 512-9 576 10 498 10 995 1 433-8 451-6 458 40 5 36-22 46-151 55-168 11-222 24-266 64-34 31-36 37-35 92 1 79 28 153 216 583 87 201 196 452 241 557 45 106 85 193 88 193 4 0 23-37 42-82 19-46 78-182 130-303 186-430 328-803 342-896 10-66-8-122-51-157-45-37-66-42-241-51-149-8-176-17-171-55 7-46 25-48 453-40 491 9 425 9 816-1l326-8 22 22c20 20 21 25 8 44-17 26-49 34-134 36-170 3-326 63-413 158-96 105-198 275-303 508-70 155-241 519-452 960-91 192-164 356-162 365 3 8 107 251 231 540 125 289 275 635 333 770s142 331 188 435c45 105 94 220 110 256l28 67 105-217c57-119 114-238 127-266 13-27 42-90 65-140 476-1019 1165-2595 1319-3016 68-187 79-246 56-304-32-85-108-115-295-115-47 0-102-5-123-11-33-9-38-14-35-37 6-50 31-54 263-46 116 3 239 6 274 5 88-3 163-33 221-90 60-57 70-105 46-202-35-136-191-405-314-541-129-143-362-346-556-487-604-437-1297-699-2041-772-159-16-586-16-755 0-877 81-1733 456-2380 1042-125 113-297 289-405 414-93 108-149 207-190 331-57 173-18 257 137 300 86 24 292 28 491 10 217-20 461-21 497-3 15 8 26 23 28 39 3 23-2 28-35 37-21 6-66 11-101 11-89 0-200 19-245 42-43 22-77 70-77 110 0 42 54 203 119 350 94 215 415 955 457 1054 22 50 273 633 559 1296 456 1058 521 1204 531 1185 7-12 91-191 187-397z' />
          </g>
        </svg>
      </div>
    ) : (
      <div style={containerStyle}>
        <svg viewBox='0 0 9050 9050' height={size} width={size}>
          <g fill={color}>
            <path d='M4130 9039c-592-57-1097-199-1615-454-624-308-1194-780-1605-1330-495-662-786-1386-887-2210-26-215-26-825 0-1035 94-743 326-1381 722-1980C1506 879 2726 147 4105 15c208-20 632-20 840 0 711 68 1365 287 1971 661 297 182 596 425 869 705 649 666 1080 1538 1220 2469 61 407 61 945 0 1350-130 865-504 1667-1078 2315-408 461-876 819-1402 1074-274 132-436 197-677 270-317 96-599 150-938 181-133 12-654 11-780-1zm610-389c613-35 1145-180 1675-454 435-225 779-485 1124-851 535-568 913-1317 1045-2074 52-297 61-396 61-741 0-412-27-644-116-1008-78-320-162-515-269-623-105-106-170-103-285 15-151 155-302 447-665 1286-238 551-341 777-518 1145-68 143-151 314-182 380-212 443-418 864-529 1079-313 612-353 686-397 729-50 50-121 30-172-51-35-53-65-117-265-552-176-384-162-354-402-875-113-247-232-505-263-572-44-97-59-120-69-111-7 6-13 14-13 18s-70 151-155 325c-85 175-155 319-155 320 0 10-456 927-552 1110-205 389-222 415-278 415-70 0-117-55-194-222-19-40-82-179-141-308s-123-269-142-310-166-358-325-705c-160-346-329-715-378-820-48-104-99-215-113-245-13-30-118-257-232-505-114-247-254-551-310-675-92-201-206-450-321-700-107-234-129-263-202-262-58 1-97 25-183 111-115 115-199 250-242 391-198 641-236 1321-111 1980 118 623 368 1192 748 1705 201 271 509 582 796 806 227 177 601 401 845 504 407 173 734 264 1140 316 273 36 489 44 745 29zM3723 6230c269-577 597-1296 597-1308 0-8-192-430-605-1327-40-88-117-254-170-370-120-261-172-351-252-436-71-75-157-125-268-157-96-28-131-33-274-41-104-6-126-10-137-26-21-29-17-43 19-61 29-16 72-16 512-9 576 10 498 10 995 1 433-8 451-6 458 40 5 36-22 46-151 55-168 11-222 24-266 64-34 31-36 37-35 92 1 79 28 153 216 583 87 201 196 452 241 557 45 106 85 193 88 193 4 0 23-37 42-82 19-46 78-182 130-303 186-430 328-803 342-896 10-66-8-122-51-157-45-37-66-42-241-51-149-8-176-17-171-55 7-46 25-48 453-40 491 9 425 9 816-1l326-8 22 22c20 20 21 25 8 44-17 26-49 34-134 36-170 3-326 63-413 158-96 105-198 275-303 508-70 155-241 519-452 960-91 192-164 356-162 365 3 8 107 251 231 540 125 289 275 635 333 770s142 331 188 435c45 105 94 220 110 256l28 67 105-217c57-119 114-238 127-266 13-27 42-90 65-140 476-1019 1165-2595 1319-3016 68-187 79-246 56-304-32-85-108-115-295-115-47 0-102-5-123-11-33-9-38-14-35-37 6-50 31-54 263-46 116 3 239 6 274 5 88-3 163-33 221-90 60-57 70-105 46-202-35-136-191-405-314-541-129-143-362-346-556-487-604-437-1297-699-2041-772-159-16-586-16-755 0-877 81-1733 456-2380 1042-125 113-297 289-405 414-93 108-149 207-190 331-57 173-18 257 137 300 86 24 292 28 491 10 217-20 461-21 497-3 15 8 26 23 28 39 3 23-2 28-35 37-21 6-66 11-101 11-89 0-200 19-245 42-43 22-77 70-77 110 0 42 54 203 119 350 94 215 415 955 457 1054 22 50 273 633 559 1296 456 1058 521 1204 531 1185 7-12 91-191 187-397z' />
          </g>
        </svg>
      </div>
    )}
  </React.Fragment>
)

export default WLogo
