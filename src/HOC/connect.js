import { useState, useEffect, useRef } from "react";

import { useTodos } from "Providers/Todos";

const connect = (mapStateToProps) => (WrappedComponent) => (props) => {
  const value = useTodos();

  const [mappedProps, setMappedProps] = useState(() =>
    mapStateToProps(value, props)
  );
  const propsRef = useRef(props);

  useEffect(() => {
    return setMappedProps(mapStateToProps(value, propsRef.current));
  }, [value]);

  return <WrappedComponent {...props} {...mappedProps} />;
};

export default connect;
